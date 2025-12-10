import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const scope = { React };

export default function LiveEditorComponent({ code }) {
  return (
    <LiveProvider code={code} scope={{ React }} >
      <LiveEditor style={{ backgroundColor: '#f5f5f5', padding: 10 }} />
      <LiveError style={{ color: 'red' }} />
      <LivePreview />
    </LiveProvider>
  );
}

