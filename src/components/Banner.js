import React from 'react';
import styles from './Banner.module.css';

export default function Banner({ message, link, linkText }) {
  return (
    <div className={styles.banner}>
      <p>
        {message}{' '}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {linkText || 'Learn more'}
          </a>
        )}
      </p>
    </div>
  );
}
