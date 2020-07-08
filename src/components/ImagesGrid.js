import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { ZoomIn } from "@material-ui/icons";
import { Dialog, Button, IconButton, GridListTileBar } from "@material-ui/core";

export default function ImagesGrid({ images }) {
  return (
    <GridList cols={3}>
      {images.map((img) => (
        <GridListTile key={img.id}>
          <img src={img.largeImageURL} alt="" />
          <GridListTileBar
            title={img.tags}
            subtitle={<span>by: {img.user}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${img.tags}`}>
                <ZoomIn color="secondary" />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}
