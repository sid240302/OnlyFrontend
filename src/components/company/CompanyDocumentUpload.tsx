import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface CompanyDocumentUploadProps {
  onFileChange: (file: File | null, type: string) => void;
  initialType?: string;
  initialFileName?: string;
}

const CompanyDocumentUpload: React.FC<CompanyDocumentUploadProps> = ({ onFileChange, initialType = "", initialFileName = "" }) => {
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState<string>(initialType);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      // Always call onFileChange with the latest type
      onFileChange(e.target.files[0], type);
    } else {
      setFile(null);
      onFileChange(null, type);
    }
  };


  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    // Always call onFileChange with the latest file
    onFileChange(file, e.target.value);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1">Document Type</label>
      <Select value={type} onValueChange={(val) => { setType(val); onFileChange(file, val); }}>
        <SelectTrigger className="w-full" name="document_type">
          <SelectValue placeholder="Select document type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="incorporation_certificate">Incorporation Certificate</SelectItem>
          <SelectItem value="gstin">GSTIN</SelectItem>
        </SelectContent>
      </Select>
      <label className="block text-sm font-medium mb-1 mt-2">Upload Document</label>
      <Input
        type="file"
        accept="application/pdf,image/*"
        onChange={handleFileChange}
        required={!initialFileName}
      />
      {file && <div className="mt-2 text-xs text-muted-foreground">Selected: {file.name}</div>}
      {!file && initialFileName && <div className="mt-2 text-xs text-muted-foreground">Current: {initialFileName}</div>}
    </div>
  );
};

export default CompanyDocumentUpload;
