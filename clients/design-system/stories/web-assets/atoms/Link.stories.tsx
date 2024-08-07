import React from 'react';
import { Meta } from '@storybook/react';
import { Link, LinkProps } from '../../../src/main';

export default {
  title: 'Web Assets/Atoms/Link',
  component: Link,
} as Meta<typeof Link>;

export const Default = args => <Link {...args}>Run Query</Link>;

Default.args = {
  href: 'https://google.com',
} as LinkProps;
