import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostComments from '../';  

describe('Teste para o componente PostComments', () => {
    test('Deve permitir adicionar dois comentários', () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('comment-submit');

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
