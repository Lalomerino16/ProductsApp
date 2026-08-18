import { Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { format } from 'date-fns';
// import { es } from 'date-fns/locale';

interface ReviewCardProps {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export const ReviewCard = ({ rating, comment, reviewerName }: ReviewCardProps) => {
  const initials = reviewerName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  //const formattedDate = format(new Date(date), "d 'de' MMMM, yyyy", { locale: es });

  return (
    <div className="p-5 rounded-xl border border-border bg-card">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10 bg-secondary">
          <AvatarFallback className="text-sm font-medium bg-secondary text-secondary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground">{reviewerName}</span>
            {/* <span className="text-xs text-muted-foreground">{formattedDate}</span> */}
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">{comment}</p>
        </div>
      </div>
    </div>
  );
};
