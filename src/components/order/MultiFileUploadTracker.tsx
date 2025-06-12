
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, RotateCcw, Upload } from "lucide-react";

interface UploadFile {
  name: string;
  progress: number;
  status: "pending" | "uploading" | "success" | "error";
}

interface MultiFileUploadTrackerProps {
  files: UploadFile[];
  onRetry: (index: number) => void;
}

export const MultiFileUploadTracker = ({ files, onRetry }: MultiFileUploadTrackerProps) => {
  const getStatusIcon = (status: string, progress: number) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "uploading":
        return <Upload className="h-4 w-4 text-primary animate-pulse" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-muted" />;
    }
  };

  const getStatusText = (status: string, progress: number) => {
    switch (status) {
      case "success":
        return "Completed";
      case "error":
        return "Failed";
      case "uploading":
        return `${progress}%`;
      default:
        return "Pending";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Upload Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {files.map((file, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(file.status, file.progress)}
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {getStatusText(file.status, file.progress)}
                  </span>
                  {file.status === "error" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onRetry(index)}
                      className="h-6 px-2"
                    >
                      <RotateCcw className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
              
              <Progress 
                value={file.progress} 
                className={`h-2 ${
                  file.status === "error" ? "bg-destructive/20" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
