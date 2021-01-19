import Image from "next/image";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import Layout from "../components/Layout";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useState } from "react";
import Card from "../components/card/Card";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 160px);
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 40px;
  display: flex;
`;

const CenterContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 850px;
`;

const SidebarContainer = styled.div`
  width: 100%;
  max-width: 290px;
  min-height: 360px;
  height: 100%;
  margin-left: 40px;
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5);
  border-radius: 4px;
`;

const CardHeader = styled.div`
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5);
  border-radius: 4px;
  height: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`;

const CardCoverHeader = styled.div`
  width: 100%;
  height: 180px;
  min-height: 180px;
  background-image: url(./cover-user-header.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const CardCoverHeaderActions = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  height: 36px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #181818;
`;

const UploadButton = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 10px 30px rgba(113, 123, 133, 0.05);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 16px;
    color: #181818;

    &:hover {
      color: rgba(24, 24, 24, 0.2);
    }
  }
`;

const EditButton = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 10px 30px rgba(113, 123, 133, 0.05);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 132px;
  height: 36px;
  margin-left: auto;

  i {
    font-size: 16px;
    margin-right: 16px;
  }
`;

const CardInfoUser = styled.div`
  display: flex;
  height: 100%;
`;

const CardInfoUserWrapperAvatar = styled.div`
  width: 195px;
  position: relative;
`;

const CardInfoUserAvatar = styled.div`
  width: 170px;
  height: 170px;
  background-image: url(./avatar-info-user-demo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 10px solid #ffffff;
  border-radius: 1000px;
  position: absolute;
  top: -24px;
  left: 25px;
`;

const CardInfoDataUser = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;

  .name {
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #181818;
  }

  .bio {
    font-family: Roboto;
    font-size: 14px;
    line-height: 150%;
    color: #181818;
  }

  .actions {
    margin-top: auto;
    .btn-info-user {
      margin-right: 15px;
    }
  }

  .btn {
    cursor: pointer;
    border-radius: 4px;
    padding: 11px 28px;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #0275b1;

    &.btn-primary {
      background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
      color: #ffffff;
      &:hover {
        color: #0275b1;
        background: white;
      }
      &.btn-outline {
        color: #0275b1;
        background: white;

        &:hover {
          background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
          color: #ffffff;
        }
      }
    }
  }
`;

const MainContainer = styled.div`
  .MuiTab-textColorPrimary.Mui-selected {
    background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
    border-radius: 4px 4px 0px 0px;
    color: white;
  }

  .PrivateTabIndicator-colorPrimary-6,
  .PrivateTabIndicator-colorPrimary-2 {
    background-color: transparent;
  }
`;

const ProjectsContainer = styled(Card)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  .show-more {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #0275b1;
    margin-top: 25px;
  }
`;

const ProjectContainerHeader = styled.div`
  display: flex;
  align-items: center;

  .project-count {
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    color: #747474;
    margin-left: auto;
  }
`;

const ProjectsGrid = styled.ul`
  margin-top: 21px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  li {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;
    color: #181818;
    .title {
      font-weight: 500;
      font-size: 14px;
      margin-top: 15px;
      margin-bottom: 5px;
    }
  }
`;

const Groups = styled(Card)`
  margin-top: 20px;
`;

const MemberList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  li {
    border: 1px solid #f4f4f4;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 14px;

    .name {
      font-family: Roboto;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #181818;
    }

    .MuiAvatar-colorDefault {
      background: #0275b1;
      color: white;
    }
  }
`;

const CardAnotations = styled(Card)`
  margin-top: 16px;

  .show-more {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #0275b1;
    margin-top: 25px;
    display: block;
  }
`;

const CardAnotationList = styled.ul`
  li {
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 30px;
    margin-top: 12px;
    display: flex;
    align-items: center;

    .icon {
      width: 54px;
      height: 54px;
      padding: 11px;
      border-radius: 1000px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      background: linear-gradient(215.49deg, #ffb75e 5.4%, #ed8f03 93.45%);
    }

    .anotation {
      margin-left: 16px;

      .user {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #181818;
      }

      .description {
        font-family: Roboto;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #181818;
      }
    }
  }
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

const IndexPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const projects = [
    {
      id: "1",
      title: "Zara redesign concept",
      subtitle: "UX/UI design, 15.07.2019",
      cover: "/project-1.png",
    },
    {
      id: "2",
      title: "SCTHON event brand identity",
      subtitle: "Graphic design, 03.31.2019",
      cover: "/project-2.png",
    },
    {
      id: "3",
      title: "Drozd. Brand identity. 2016",
      subtitle: "Graphic design, 03.04.2016",
      cover: "/project-3.png",
    },
  ];

  const groups = [
    {
      id: "1",
      name: "Mátematica",
      members: [
        {
          id: "1",
          name: "Juillian Lee",
          avatar: "./avatar-demo.png",
        },
        {
          id: "2",
          name: "Remy Sharp",
          avatar: "./avatar-demo.png",
        },
        {
          id: "3",
          name: "Travis Howard",
          avatar: "./avatar-demo.png",
        },
        {
          id: "4",
          name: "Cindy Baker",
          avatar: "./avatar-demo.png",
        },
        {
          id: "5",
          name: "Agnes Walker",
          avatar: "./avatar-demo.png",
        },
        {
          id: "6",
          name: "Trevor Henderson",
          avatar: "./avatar-demo.png",
        },
      ],
    },
    {
      id: "2",
      name: "Artes",
      members: [
        {
          id: "1",
          name: "Juillian Lee",
          avatar: "./avatar-demo.png",
        },
        {
          id: "2",
          name: "Remy Sharp",
          avatar: "./avatar-demo.png",
        },
        {
          id: "3",
          name: "Travis Howard",
          avatar: "./avatar-demo.png",
        },
        {
          id: "4",
          name: "Cindy Baker",
          avatar: "./avatar-demo.png",
        },
        {
          id: "6",
          name: "Trevor Henderson",
          avatar: "./avatar-demo.png",
        },
      ],
    },
    {
      id: "3",
      name: "Educação Física",
      members: [
        {
          id: "1",
          name: "Juillian Lee",
          avatar: "./avatar-demo.png",
        },
        {
          id: "2",
          name: "Remy Sharp",
          avatar: "./avatar-demo.png",
        },
        {
          id: "3",
          name: "Travis Howard",
          avatar: "./avatar-demo.png",
        },
        {
          id: "4",
          name: "Cindy Baker",
          avatar: "./avatar-demo.png",
        },
      ],
    },
  ];

  return (
    <Layout title="Home">
      <Container>
        <CenterContainer>
          <CardHeader>
            <CardCoverHeader>
              <CardCoverHeaderActions>
                <UploadButton>
                  <i className="fal fa-cloud-upload"></i>
                </UploadButton>
                <EditButton>
                  <i className="fal fa-edit"></i>
                  EDITAR
                </EditButton>
              </CardCoverHeaderActions>
            </CardCoverHeader>
            <CardInfoUser>
              <CardInfoUserWrapperAvatar>
                <CardInfoUserAvatar />
              </CardInfoUserWrapperAvatar>
              <CardInfoDataUser>
                <div className="name">Juillian Lee</div>
                <div className="bio">
                  Cursando Análise e Desenvolvimento de Sistema, aluno desde
                  2015
                </div>
                <div className="actions">
                  <button className="btn btn-primary btn-info-user">
                    Dados de Contato
                  </button>
                  <button className="btn btn-primary btn-outline">
                    1,043 conexões
                  </button>
                </div>
              </CardInfoDataUser>
            </CardInfoUser>
          </CardHeader>
          <MainContainer>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Perfil" />
                <Tab label="Atividades e Interesses" />
                <Tab label="Artigos (3)" />
              </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
              <ProjectsContainer>
                <ProjectContainerHeader>
                  <h3 className="title">Projetos</h3>
                  <div className="project-count">1 of 12</div>
                </ProjectContainerHeader>
                <ProjectsGrid>
                  {projects.map((p) => (
                    <li key={p.id}>
                      <Image src={p.cover} alt="me" width="250" height="160" />
                      <h4 className="title">{p.title}</h4>
                      <p className="desc">{p.subtitle}</p>
                    </li>
                  ))}
                </ProjectsGrid>
                <a href="#" className="show-more">
                  Ver todos (12)
                </a>
              </ProjectsContainer>

              <Groups>
                <h3 className="title">Grupos de Interesse</h3>
                <MemberList>
                  {groups.map((g) => (
                    <li key={g.id}>
                      <div className="name">{g.name}</div>
                      <AvatarGroup max={4}>
                        {g.members.map((m) => (
                          <Avatar key={m.id} alt={m.name} src={m.avatar} />
                        ))}
                      </AvatarGroup>
                    </li>
                  ))}
                </MemberList>
              </Groups>

              <CardAnotations>
                <h3 className="title">Anotacações</h3>
                <CardAnotationList>
                  <li>
                    <div className="icon">
                      <i className="fal fa-keynote"></i>
                    </div>
                    <div className="anotation">
                      <div className="user">
                        Português - Prof. Josiane Siqueira
                      </div>
                      <div className="description">
                        Aluno não consegue entregar as atividades nas datas
                        solicitadas.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-keynote"></i>
                    </div>
                    <div className="anotation">
                      <div className="user">
                        Português - Prof. Josiane Siqueira
                      </div>
                      <div className="description">
                        Aluno não consegue entregar as atividades nas datas
                        solicitadas.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-keynote"></i>
                    </div>
                    <div className="anotation">
                      <div className="user">
                        Português - Prof. Josiane Siqueira
                      </div>
                      <div className="description">
                        Aluno não consegue entregar as atividades nas datas
                        solicitadas.
                      </div>
                    </div>
                  </li>
                </CardAnotationList>
                <a href="#" className="show-more">
                  Ver todos (12)
                </a>
              </CardAnotations>
            </TabPanel>
          </MainContainer>
        </CenterContainer>
        <SidebarContainer />
      </Container>
    </Layout>
  );
};

export default IndexPage;
