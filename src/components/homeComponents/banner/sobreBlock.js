// Foundational
import React from 'react';

export const SobreBlock = (props) => {                                                 
    const { sobre } = props;
    const styles = {
        backgroundImage: `url(${sobre.imgUrl})`
    }

    return (
        <section className="sobre" style={styles}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 dangerouslySetInnerHTML={{ __html: sobre.title }} />
                        <p dangerouslySetInnerHTML={{ __html: sobre.description }} />                        
                    </div>
                </div>
            </div>
        </section>
    )
};