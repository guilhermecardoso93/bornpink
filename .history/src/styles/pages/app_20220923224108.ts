import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    width: 48,
    height: 48,
    
    border: 0,
    borderRadius: 8,

    backgroundColor: '$gray800',
    color: '$gray300'
  }
})