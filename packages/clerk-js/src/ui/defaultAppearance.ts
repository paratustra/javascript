import type { Appearance } from '@clerk/types';

import type { InternalTheme } from './foundations';

export const defaultAppearance: Appearance = {
  elements: ({ theme }: { theme: InternalTheme }) => {
    return {
      button: {
        border: 0,
        '&[data-variant="primary"]': {
          '&:hover': {
            backgroundColor: theme.colors.$primary500,
          },
          '&:focus': {
            backgroundColor: theme.colors.$primary500,
          },
          ':after': {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            zIndex: -1,
            inset: 0,
            opacity: 1,
            transitionProperty: theme.transitionProperty.$common,
            transitionDuration: theme.transitionDuration.$controls,
            background: `linear-gradient(180deg, ${theme.colors.$whiteAlpha150} 0%, ${theme.colors.$transparent} 100%)`,
          },
          ':hover::after': {
            opacity: 0,
          },
          ':active::after': {
            opacity: 1,
          },
          boxShadow:
            '0px 0px 0px 1px #2F3037, 0px 1px 1px 0px rgba(255, 255, 255, 0.07) inset, 0px 2px 3px 0px rgba(34, 42, 53, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.24)',
        },
        '&[data-variant="secondary"]': {
          boxShadow:
            '0px 2px 3px -1px rgba(0, 0, 0, 0.08), 0px 1px 0px 0px rgba(0, 0, 0, 0.02), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)',
        },
      },
    };
  },
};