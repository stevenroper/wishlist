import React from 'react';
import { Card, CardTitle, CardMedia, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default (props) => {
  const album = props.album;
  return (
    <Card className="album-card">
     <CardMedia>
       <img src={album.artworkUrl100} />
     </CardMedia>
     <CardTitle title={album.collectionName} subtitle={album.artistName} />
     <CardActions>
      <RaisedButton primary={true} label="+ Wishlist" />
     </CardActions>
   </Card>
  );
}