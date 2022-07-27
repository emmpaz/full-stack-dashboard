import { Button, Input, Paper } from '@mui/material';
import React, { useState } from 'react';
import uploadFileToBlob, { isStorageConfigured } from '../azure-storge-blob';

const storageConfigured = isStorageConfigured();

const UploadModule = () => {
    // all blobs in container
    const [blobList, setBlobList] = useState<string[]>([]);
    // current file to upload into container
    const [fileSelected, setFileSelected] = useState(null);

    // UI/form management
    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36));

    const onFileChange = (event: any) => {
        // capture file into state
        setFileSelected(event.target.files[0]);
    };

    const onFileUpload = async () => {
        // prepare UI
        setUploading(true);
    
        // *** UPLOAD TO AZURE STORAGE ***
        const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);
    
        // prepare UI for results
        setBlobList(blobsInContainer);
    
        // reset state/form
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));
      };

      const DisplayForm = () => (
        <div>
          <Input type="file" onChange={onFileChange} key={inputKey || ''} />
            <Button type="submit" onClick={onFileUpload}>
                Submit
            </Button>
        </div>
      )

     
  return (
    <Paper elevation={3} sx={{p:2}}>
      <h1>Upload Campaign Media</h1>
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      <hr />
      {storageConfigured && blobList.length > 0}
      {!storageConfigured && <div>Storage is not configured.</div>}
    </Paper>
  );
};

export default UploadModule;
