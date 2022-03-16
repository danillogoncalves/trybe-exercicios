import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testando o Componente ValidEmail.', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    const LOADING_FIRST = true;
    render(<ValidEmail email={EMAIL_USER} loadingFirst={LOADING_FIRST} />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const LOADING_FIRST = true;
    render(<ValidEmail email={EMAIL_USER} loadingFirst={LOADING_FIRST} />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Não exibir a mensagem caso o email ainda não tenha sido enviado.', () => {
    const EMAIL_USER = '';
    const LOADING_FIRST = false;
    render(<ValidEmail email={EMAIL_USER} loadingFirst={LOADING_FIRST} />);
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).not.toBeInTheDocument();
  });

  it('Mude a cor do texto caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    const LOADING_FIRST = true;
    render(<ValidEmail email={EMAIL_USER} loadingFirst={LOADING_FIRST} />);
    const isValidText = screen.queryByTestId('id-is-email-valid');
    const TEST_COLOR_STYLE = isValidText.style.color;
    expect(TEST_COLOR_STYLE).toBe('green');
  });

  it('Mude a cor do texto caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const LOADING_FIRST = true;
    render(<ValidEmail email={EMAIL_USER} loadingFirst={LOADING_FIRST} />);
    const isValidText = screen.queryByTestId('id-is-email-valid');
    const TEST_COLOR_STYLE = isValidText.style.color;
    expect(TEST_COLOR_STYLE).toBe('red');
  });
});
