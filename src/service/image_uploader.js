class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'ocp16juc');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dcgkxaiiw/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
