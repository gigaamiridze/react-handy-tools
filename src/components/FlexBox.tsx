import React, { ReactNode } from 'react';

interface IFlexBoxProps {
  children: ReactNode;
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
  alignItems: 'stretch' | 'center' | 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial';
  gap?: number | 'normal' | 'initial' | 'inherit';
  rowGap?: number | 'normal' | 'initial' | 'inherit';
  columnGap?: number | 'normal' | 'initial' | 'inherit';
}

function FlexBox(props: IFlexBoxProps) {
  const {
    children,
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    gap,
    rowGap,
    columnGap
  } = props;

  return (
    <div style={{
      display: 'flex',
      flexDirection: flexDirection || 'row',
      alignItems: alignItems || 'stretch',
      justifyContent: justifyContent || 'flex-start',
      flexWrap: flexWrap || 'nowrap',
      gap: gap ? `${gap}px` : 0,
      rowGap: rowGap ? `${rowGap}px` : 0,
      columnGap: columnGap ? `${columnGap}px` : 0
    }}
    >
      {children}
    </div>
  )
}

export default FlexBox;
