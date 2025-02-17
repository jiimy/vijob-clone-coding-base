import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BottomMenu from './BottomMenu';
import { useLanguage } from '@/context/LanguageContext';

// Given: 렌더링된 Navigation 컴포넌트에서
describe('Navigation', () => {
  it('should navigate to the correct page when a link is clicked', () => {
    // Given
    render(
      <BottomMenu />
    );

    const { language } = useLanguage();

    const homeLink = screen.getByText('홈');
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe(`/${language}/job`);

    const aboutLink = screen.getByText('커뮤니티');
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe(`/${language}/community`);
  });
});
