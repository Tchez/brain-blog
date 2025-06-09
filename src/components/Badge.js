import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';
import Link from '@docusaurus/Link';

// Enum de tipos de badge e suas classes CSS
const BADGE_TYPES = {
    marketing: {
        label: 'Marketing',
        className: styles.marketing,
        href: '/notes/projects/speakup-palmas/in-person/roles-responsibilities#marketing-and-social-media',
    },
    activities: {
        label: 'Activities',
        className: styles.dinamicas,
        href: '/notes/projects/speakup-palmas/in-person/roles-responsibilities#activities-and-dynamics',
    },
    logistics: {
        label: 'Logistics',
        className: styles.logistica,
        href: '/notes/projects/speakup-palmas/in-person/roles-responsibilities#organization-and-logistics',
    },
    leadership: {
        label: 'Leadership',
        className: styles.lideranca,
        href: '/notes/projects/speakup-palmas/in-person/roles-responsibilities#area-leadership',
    },
    volunteer: {
        label: 'Volunteer',
        className: styles.voluntario,
        href: '/notes/projects/speakup-palmas/in-person/roles-responsibilities#volunteer',
    },
};

/**
 * Badge component for SpeakUp Palmas
 * @param {string} type - Badge type (marketing, activities, logistics, leadership, volunteer)
 * @param {string} [href] - Custom link for the badge (optional, overrides default)
 */
export default function Badge({ type, href }) {
    const badge = BADGE_TYPES[type] || BADGE_TYPES.marketing;
    function handleClick(e) {
        e.stopPropagation();
    }
    return (
        <Link
            href={href || badge.href}
            className={clsx(styles.badge, badge.className)}
            target="_blank"
            rel="noopener noreferrer"
            title={badge.label}
            onClick={handleClick}
        >
            {badge.label}
        </Link>
    );
}
