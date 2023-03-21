import { movieReviews } from '../actions/action';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async movieId => {
      try {
        const newReviews = await movieReviews(movieId);
        setReviews(newReviews.data);
      } catch (error) {
        return new Error();
      }
    };
    fetchReviews(id);
  }, [id]);
  return (
    <>
      {!!reviews?.results?.length &&
        reviews?.results?.map(item => (
          <Text key={item.id}>{item.content}</Text>
        ))}
      {!reviews?.results?.length && (
        <Text>Sorry, we don't have any reviews for this movie</Text>
      )}
    </>
  );
};

export default Reviews;
