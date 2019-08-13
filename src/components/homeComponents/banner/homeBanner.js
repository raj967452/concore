// Foundational
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Banner = (props) => {
    const { banner } = props;
    const styles = {
        backgroundImage: `url(${banner.imgUrl})`
    }
    const hrvScrollDown = (e) => {     
        if (props.scrollRef && props.scrollRef.current) {
            props.scrollRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section className="banner" style={styles}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 dangerouslySetInnerHTML={{ __html: banner.title }} />
                        <p dangerouslySetInnerHTML={{ __html: banner.description }} />
                        <div className="link-scroll">
                            <div onClick={hrvScrollDown} className="scrolldown hvr-wobble-vertical">
                                <FontAwesomeIcon icon={['fas', 'chevron-down']} size="2x" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};