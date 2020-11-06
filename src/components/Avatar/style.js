import styled, { css } from 'styled-components';
// 定义共用样式
const circleMixinFunc = (color) => css`
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${color};
`;
// 头像自带的样式
const StyledAvatar = styled.div`
  position: relative;
`;

//在线状态
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;
  &::before {
    /* ${circleMixinFunc('white')} */
    ${({size})=>circleMixinFunc("white",size)}
    transform: scale(2);
  }
  &::after {
    ${({ theme,status,size }) => {
      if(status==="online"){
        return circleMixinFunc(theme.green,size)
      } else if(status==="offline"){
        return circleMixinFunc(theme.gray,size)
      }
    }}
  }
`;

//头像模板
const AvatarClip = styled.div`
  width: ${({size})=>size};
  height: ${({size})=>size};
  border-radius: 50%;
  overflow: hidden;
`;
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; //填充元素的整个内容框
  object-position: center;
`;

export default StyledAvatar;
export { StatusIcon, AvatarClip, AvatarImage };
