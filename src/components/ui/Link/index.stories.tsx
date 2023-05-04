import { ComponentMeta, Story } from '@storybook/react';

import { pagesPath } from '@/lib/$path';

import { Link } from '.';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const _Link: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Link href={pagesPath.$url()}>Default Link</Link>
      </dd>
      <dt>target=&quot;_blank&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Link href={pagesPath.$url()} target={'_blank'}>
          target=&quot;_blank&quot; Link
        </Link>
      </dd>
    </dl>
  );
};
