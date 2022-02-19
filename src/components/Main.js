import styled from "styled-components";
import React from "react";
const Main = (props) => {
  return <Container>
    <ShareBox>Share
    <div>
      <img src = "/images/icons8-user-64.png" alt="" />
      <button>Start a Post</button>
    </div>

    <div>
      <button>
        <img src="\images\icons8-photo-camera-64.png" alt="" />
        <span>Photo</span>
      </button>

      <button>
        <img src="\images\icons8-video-message-48.png" alt="" />
        <span>Video</span>
      </button>

      <button>
        <img src="\images\icons8-event-64.png" alt="" />
        <span>Event</span>
      </button>

      <button>
        <img src="\images\icons8-write-64.png" alt="" />
        <span>Write Article</span>
      </button>
    </div>
  </ShareBox>
  <div>
    <Article>
      <SharedActor>
        <a>
          <img src="images\icons8-user-64.png" alt="" />
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Date</span>
          </div>
        </a>
        <button>
          <img src="images\icons8-ellipsis-30.png" alt="" />
        </button>
      </SharedActor>
      <Description>Description</Description>
      <SharedImg>
        <a>
          <img src="/images/1.jpg" alt="" />
        </a>
      </SharedImg>
      <SocialCounts>
        <li>
          <button>
            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
            <span>75</span>
          </button>
        </li>
        <li>
          <button>
            <a>2 comments</a>
          </button>
        </li>
      </SocialCounts>
      <SocialActions>
        <button>
          <img src="\images\like-svgrepo-com.svg" alt="" />
          <span>Like</span>
        </button>
        <button>
          <img src="\images\comment-svgrepo-com.svg" alt="" /> 
          <span>Comment</span>
        </button>
        <button>
          <img src="\images\share-svgrepo-com.svg" alt="" />
          <span>Share</span>
        </button>
        <button>
          <img src="\images\send-svgrepo-com.svg" alt="" />
          <span>Send</span>
        </button>
      </SocialActions>
    </Article>
  </div>
  </Container>;
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px  rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rbga(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      background: transparent;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        backround-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
          width: 25px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n+1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  size: 15px
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    color: #0a66c2;
    padding: 8px;
    //margin: 0 5px;
    &:nth-child(1){
      img {
        margin: 0 4px 0 -2px;
        width: 25px;
      }
    }
    &:nth-child(3){
      img {
        margin: 0 4px 0 -2px;
        width: 25px;
      }
    }
    &:nth-child(4){
      img {
        margin: 0 4px 0 -2px;
        width: 25px;
      }
    }

    @media(min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }

`;

export default Main;
