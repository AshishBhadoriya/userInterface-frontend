"use client"
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { serverURL } from '@/app/services/FetchServices';
import { Padding } from '@mui/icons-material';

export default function HomePageImages() {
  return (
    <Box style={{ width: '550px', height:'100%'}}>
      <ImageList variant="masonry" cols={2} gap={8} >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${serverURL}/images/${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  
  {
    img: 'work6.png',
    title: 'Books',
  },
  {
    img: 'work2.png',
    title: 'Sink',
  },
  {
    img: 'work7.png',
    title: 'Kitchen',
  },
  {
    img: 'work5.png',
    title: 'Blinds',
  },
  {
    img: 'work1.png',
    title: 'Blinds',
  },
  {
    img: 'work4.png',
    title: 'Blinds',
  },
    
];
