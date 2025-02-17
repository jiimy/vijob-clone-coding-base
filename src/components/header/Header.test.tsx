import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { ScrollProvider } from '@/context/ScrollContext';

describe('Header', () => {
  it('should render home theme correctly', () => {
    render(
      <ScrollProvider>
        <Header theme="home" />
      </ScrollProvider>
    );

    const searchElement = screen.getByText('검색창 및 타이틀');
    const areaElement = screen.getByText('배너 및 필터');

    expect(searchElement).toBeInTheDocument();
    expect(areaElement).toBeInTheDocument();
  });

  it('should render detail theme correctly', () => {
    render(
      <ScrollProvider>
        <Header theme="detail" />
      </ScrollProvider>
    );

    const backButton = screen.getByText('뒤로가기');
    const shareIcon = screen.getByText('공유, 디테일 아이콘');

    expect(backButton).toBeInTheDocument();
    expect(shareIcon).toBeInTheDocument();
  });
});
