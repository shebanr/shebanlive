import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './Avatar.css';

export default function () {
  return (
    <div className='avatar-container'>
        <Avatar.Root>
            <Avatar.Image className='avatar-image rounded-full w-32 sm:w-10 md:w-28 lg:w-32 h-32 sm:h-10 md:h-28 lg:h-32 ' src='./Public/profilepicture.png' alt='avatar'/>
            <Avatar.Fallback>SR</Avatar.Fallback>
        </Avatar.Root>
    </div>
  )
}