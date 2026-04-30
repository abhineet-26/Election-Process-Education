import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    const response = await fetch('https://news.google.com/rss/search?q=Indian+Election+Commission+Voting&hl=en-IN&gl=IN&ceid=IN:en', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const xmlText = await response.text();
    const result = await parseStringPromise(xmlText);
    
    // Extract items and format them
    const items = result.rss.channel[0].item.slice(0, 5).map((item: any) => {
      // Remove publisher name from title if it exists (usually separated by " - ")
      const titleParts = item.title[0].split(' - ');
      const publisher = titleParts.length > 1 ? titleParts.pop() : 'News Source';
      const title = titleParts.join(' - ');

      return {
        id: item.guid[0]._,
        title: title,
        link: item.link[0],
        pubDate: new Date(item.pubDate[0]).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        publisher: publisher
      };
    });

    return NextResponse.json({ news: items });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch latest election news' },
      { status: 500 }
    );
  }
}
