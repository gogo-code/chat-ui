import React from 'react';
import Icon from '.';
// 起别名
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faFolder,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UI 组件/Icon',
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="#ccc" />;
};

export const CustomColorSize = () => {
  return <Icon icon={SmileIcon} width={48} height={48} color="#ccc" />;
};
export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />;
};
export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: '#cccccc' }} />;
};
export const FontAwesomeSizes = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFolder} style={{ fontSize: '24px' }} />
      <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: '36px' }} />
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '48px' }} />
    </div>
  );
};
