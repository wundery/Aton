import React, { useState } from 'react';
import styled from 'styled-components';
import { BulletLink } from './BulletLink';

export default {
  title: 'Design System/TableOfContents/BulletLink',
  component: BulletLink,
  parameters: { chromatic: { disable: true } },
};

const currentPath = '/path-1';
// Bullet links should always be used in a series
export const Series = (args) => (
  <ul>
    <BulletLink currentPath={currentPath} item={{ path: '/path-1', title: 'Link 1' }} />
    <BulletLink currentPath={currentPath} item={{ path: '/path-2', title: 'Link 2' }} />
  </ul>
);
