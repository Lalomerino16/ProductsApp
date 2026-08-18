import { Star } from 'lucide-react';
import { ReviewCard } from './ReviewCard';

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
}

export const ReviewsSection = ({ reviews, averageRating }: ReviewsSectionProps) => {
  
    const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
  }));

  const maxCount = Math.max(...ratingCounts.map((r) => r.count));

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Reseñas de clientes</h2>

      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-secondary/30">
        {/* Average Rating */}
        <div className="flex flex-col items-center justify-center gap-2 min-w-[140px]">
          <span className="text-5xl font-bold text-foreground">{averageRating}</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(averageRating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {reviews.length} reseña{reviews.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Rating Breakdown */}
        <div className="flex-1 space-y-2">
          {ratingCounts.map(({ rating, count }) => (
            <div key={rating} className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground w-3">{rating}</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{
                    width: maxCount > 0 ? `${(count / maxCount) * 100}%` : '0%',
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-6 text-right">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
};
