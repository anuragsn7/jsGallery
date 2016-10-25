# jsGallery

jQuery plugin to provide a simple responsive gallery. Support for albums and image lazyload.

### Screenshot
![Desktop](./screeshot.png)


### Usage

jsGallery will only read *data-attributes*. So you can use it with your existing carousel/gallery plugins.
```html
<div id="jsGallery" data-title="Galley title here">
    ...
     <span data-album-name="Album - 1" data-src="01.jpg " data-thumbnail="thumb1.jpg"></span>
     <span data-album-name="Album - 1" data-src="02.jpg"></span>
     <span data-album-name="Second Album" data-src="P.jpg"></span>
     <span data-album-name="Second Album" data-src="Q.jpg"></span>
     ...
</div>    
```

now in *script tag*
```javascript
$('#jsGallery').jsGallery();

// or
$('#jsGallery').jsGallery({
    ...
    showAlbums: true,
    connectAlbums: true,
    ...
});
```



### Options

| Options | Description |
|--------------|-------------|
|`showAlbums`| Whether to show the albums' name or not |
|`connectAlbums`| Jump to next/prev album when reach last/first item of the album |
|`zIndex`|*z-index* of the generated jsGallery element|
|`galleryParent`|element in which generated element is appended|
|`galleryTitleAttr`|name of *data-attr* from which gallery title is read|
|`albumNameAttr`|name of *data-attr* from which name of each album is read|
|`imageLinkAttr`|name of *data-attr* from which each image's url is read|


### Methods

You can use methods like this

```
// jsGallery initialization
var gal = $('#jsGallery').jsGallery();
gal.jsGallery('<method name>', <param-1>, <param-2>, ...);

// for example
gal.jsGallery('show', 'Earth Stuff', 2);
```


|Method name|Parameter(s)|Description|
|-----------|------------|-----------|
|show|`albumName (optional)`, `imageIndex (optional)`|Shows jsGallery with given album and image opened|
|hide|*none*|Hide jsGallery|
|showNext|*none*|Show next image|
|showPrev|*none*|Show previous image|
|selectAlbum|`albumName`, `callback (optional)`|Opens given album and then executes given callback function|
|destroy|*none*|remove generated jsGallery element|

### Local Testing

```bash
$ ./server.sh
# to run a local server
```
