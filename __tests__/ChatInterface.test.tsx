import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatInterface from '../src/components/ChatInterface';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ content: 'Test response from bot' }),
  })
) as jest.Mock;

jest.mock('react-markdown', () => (props: any) => {
  return <>{props.children}</>
})

describe('ChatInterface', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders initial welcome message', () => {
    render(<ChatInterface />);
    expect(screen.getByText(/Namaste! I am your India Election Assistant/i)).toBeInTheDocument();
  });

  it('allows user to type in input field', () => {
    render(<ChatInterface />);
    const input = screen.getByPlaceholderText(/Ask me about voting in India/i);
    fireEvent.change(input, { target: { value: 'How to register?' } });
    expect(input).toHaveValue('How to register?');
  });

  it('sends a message and displays bot response', async () => {
    render(<ChatInterface />);
    
    const input = screen.getByPlaceholderText(/Ask me about voting in India/i);
    const sendButton = screen.getByRole('button', { name: /Send message/i });

    // Type and submit
    fireEvent.change(input, { target: { value: 'How to register?' } });
    fireEvent.click(sendButton);

    // Verify user message appears immediately
    expect(screen.getByText('How to register?')).toBeInTheDocument();
    
    // Verify input is cleared
    expect(input).toHaveValue('');

    // Wait for the simulated API response
    await waitFor(() => {
      expect(screen.getByText('Test response from bot')).toBeInTheDocument();
    });

    // Verify fetch was called correctly
    expect(fetch).toHaveBeenCalledWith('/api/chat', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ messages: [{ role: 'user', content: 'How to register?' }] })
    }));
  });

  it('disables input and button while loading', () => {
    render(<ChatInterface />);
    
    const input = screen.getByPlaceholderText(/Ask me about voting in India/i);
    const sendButton = screen.getByRole('button', { name: /Send message/i });

    // Initially button should be disabled because input is empty
    expect(sendButton).toBeDisabled();

    fireEvent.change(input, { target: { value: 'Test' } });
    
    // Now it should be enabled
    expect(sendButton).not.toBeDisabled();

    fireEvent.click(sendButton);

    // After clicking, both should be disabled while loading
    expect(input).toBeDisabled();
    expect(sendButton).toBeDisabled();
  });
});
