import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collections-overview/collections-overview.component';

import './collections-overview.styles.scss';
import {selectCollections} from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
            ))
          }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
