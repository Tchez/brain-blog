import React from 'react';
import clsx from 'clsx';
import IdealImage from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import styles from './ResponsiveImage.module.css';

/**
 * Componente para exibir uma imagem responsiva com tamanho e alinhamento customizáveis.
 *
 * @param {object | string} img - O objeto da imagem via `require` ou o caminho como string.
 * @param {string} alt - O texto alternativo para a imagem.
 * @param {number} maxWidth - A largura máxima em pixels.
 * @param {'start' | 'center' | 'end'} [justify='center'] - O alinhamento horizontal da imagem.
 * @param {string} [href] - Se fornecido, a imagem se tornará um link clicável.
 */
export default function ResponsiveImage({
    img,
    alt,
    maxWidth,
    justify = 'center',
    href,
}) {
    const containerStyle = {
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
    };

    // Monta as classes do container dinamicamente com clsx
    const containerClasses = clsx(
        styles.imageContainer,
        styles[`align--${justify}`]
    );

    const ImageComponent = <IdealImage img={img} alt={alt} className={styles.image} />;

    const ImageContainer = (
        <div className={containerClasses} style={containerStyle}>
            {ImageComponent}
        </div>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                {ImageContainer}
            </Link>
        );
    }

    return ImageContainer;
}
