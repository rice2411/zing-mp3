export class AlbumModel {
  name: {
    type: String;
  };
  description: {
    type: String;
  };
  type: {
    type: String;
  };
  image: {
    type: String;
  };
  publicationYear: {
    type: Date;
  };
  artistId: {
    type: Array<String>;
  };
  followers: {
    type: Array<String>;
  };
  typeIds: {
    type: Array<String>;
  };
  likes: {
    type: Number;
  };
}
