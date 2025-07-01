
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onCancel?: () => void;
  submitButtonText?: string;
}

export const FormActions = ({ onCancel, submitButtonText = "Create Partner" }: FormActionsProps) => {
  return (
    <div className="flex justify-end gap-3 pt-6 border-t">
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" className="bg-primary hover:bg-primary/90">
        {submitButtonText}
      </Button>
    </div>
  );
};
