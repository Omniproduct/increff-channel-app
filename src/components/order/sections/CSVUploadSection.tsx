import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, Download, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CSVUploadSectionProps {
  onError?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const CSVUploadSection = ({ onError, onFocus, onBlur }: CSVUploadSectionProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [validationData, setValidationData] = useState<any[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const file = files[0];
    if (file && file.type === "text/csv") {
      setUploadedFiles([file]);
      
      // Simulate validation with some errors
      const mockData = [
        { row: 1, field: "channelSkuCode", value: "SKU001", error: null },
        { row: 2, field: "channelSkuCode", value: "INVALID", error: "SKU not found in OMS" },
        { row: 3, field: "quantity", value: "", error: "Required field is empty" },
        { row: 4, field: "sellingPrice", value: "99.99", error: null },
      ];
      
      setValidationData(mockData);
      
      const errorCount = mockData.filter(item => item.error).length;
      if (errorCount > 0) {
        toast({
          title: `Almost there! Just fix ${errorCount} rows.`,
          description: "Please review the errors highlighted below.",
          variant: "destructive",
        });
        onError?.();
      } else {
        toast({
          title: "🎉 File uploaded successfully!",
          description: "Your CSV file is valid and ready to process.",
        });
      }
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file.",
        variant: "destructive",
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div className="space-y-4">
      <Card
        className={`border-2 border-dashed p-8 text-center transition-colors ${
          isDragOver ? "border-primary bg-primary/5" : "border-blue-300"
        } bg-blue-50`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <div className="flex flex-col items-center space-y-4">
          <Upload className="h-10 w-10 text-primary" />
          <div>
            <p className="text-lg font-medium text-primary">Drop your CSV file here</p>
            <p className="text-sm text-muted-foreground">or click to browse</p>
          </div>
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg border-primary text-primary hover:bg-primary hover:text-white"
          >
            <FileText className="mr-2 h-4 w-4" />
            Choose File
          </Button>
          <Input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => handleFileUpload(e.target.files)}
          />
        </div>
      </Card>

      <div className="flex items-center gap-2">
        <Download className="h-4 w-4 text-primary" />
        <Button variant="link" className="p-0 h-auto text-primary">
          Download Sample
        </Button>
      </div>

      {validationData.length > 0 && (
        <Card className="p-4 border-blue-200">
          <h4 className="font-medium mb-4 flex items-center gap-2 text-primary">
            <FileText className="h-4 w-4" />
            Validation Preview
          </h4>
          <div className="border rounded-lg overflow-hidden border-blue-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead>Row</TableHead>
                  <TableHead>Field</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {validationData.map((item, index) => (
                  <TableRow key={index} className={item.error ? "bg-red-50" : "bg-green-50"}>
                    <TableCell>{item.row}</TableCell>
                    <TableCell>{item.field}</TableCell>
                    <TableCell>{item.value || <em className="text-muted-foreground">empty</em>}</TableCell>
                    <TableCell>
                      {item.error ? (
                        <div className="flex items-center gap-2 text-destructive">
                          <AlertCircle className="h-4 w-4" />
                          <span className="text-xs">{item.error}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-xs">Valid</span>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}
    </div>
  );
};
