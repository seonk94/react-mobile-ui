import { createContext, useContext } from 'react';

export interface DialogOption {
  close?: () => void;
}

const defaultContext = {};

export const DialogContext = createContext<DialogOption>(defaultContext);

export const useDialogContext = () => useContext<DialogOption>(DialogContext);
