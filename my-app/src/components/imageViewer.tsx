const get_images = (blob_id: string, image_id: string) => {
    return 'https://med.blob.core.windows.net/${blob_id}/${image_id}';
}

export default get_images;