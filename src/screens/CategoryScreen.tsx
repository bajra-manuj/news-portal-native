import {useRoute} from '@react-navigation/native';
import Articles from '../components/Articles';
export default function CategoryScreen() {
  const {category} = useRoute().params;
  return <Articles category={category} />;
}
