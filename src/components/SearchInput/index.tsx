import React, { useEffect, useState } from "react";
import { getUserData } from "../../services/sessions";
import { getBranch } from "../../services/sessions";

import CardDetailsUser from "../../components/CardDetailsUser";
import CardDetailsRepos from "../../components/CardDetailsRepos";

import { TbUserSearch } from "react-icons/tb";
import {
  Container,
  WrapperSearch,
  CardDescription,
  Input,
  Button,
  WrapperCards,
} from "./styles";

const SearchInput = () => {
  const [valueInput, setValueInput] = useState("");
  const [user, setUser] = useState({});
  const [repoName, setRepoName] = useState("");
  const [listBranch, setlistBranch] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showRepo, setShowRepo] = useState(true);
  const [showError, setShowError] = useState(false);

  const handlerInputSearch = (e: any) => {
    setLoading(true);
    setShowError(false);
    e.preventDefault();
    getUserData(valueInput)
      .then((response) => {
        if (response === undefined) {
          setShowError(true);
        } else {
          setUser({ response });
          setShowError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
        setShowError(true);
      });
  };
  const handleBranch = (e: any) => {
    /* setLoading(true);
    setShowError(false); */
    setRepoName(e);

    getBranch(valueInput, e)
      .then((response) => {
        setlistBranch(response.data);
        setShowRepo(false);

        /* setShowError(false);
        setLoading(false); */
      })
      .catch((err) => {
        console.log("error branch", err);
        /* setLoading(false);
        setShowError(true); */
      });
  };

  useEffect(() => {
    console.log("listBranch", listBranch);
  }, [listBranch]);
  return (
    <>
      <Container>
        <WrapperSearch onSubmit={(e) => handlerInputSearch(e)}>
          <TbUserSearch style={{ fontSize: "30px", color: "#ce3df3" }} />
          <Input
            placeholder="Nome do usuário"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <Button type="submit">Pesquisar</Button>
        </WrapperSearch>
      </Container>
      {showError ? (
        "ops"
      ) : (
        <>
          {!loading ? (
            <WrapperCards>
              <CardDetailsUser dataUser={user} />
              <CardDescription>
                {showRepo && (
                  <CardDetailsRepos
                    dataUser={user}
                    dataBrach={(e: any) => {
                      handleBranch(e);
                    }}
                  />
                )}
                {listBranch && (
                  <>
                    <span>{repoName}</span>
                    {listBranch.map((value: any, index: any) => (
                      <>
                        <div key={index}>{value.name}</div>
                      </>
                    ))}
                  </>
                )}
              </CardDescription>
            </WrapperCards>
          ) : (
            <>
              <span>antes de pesquisar</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchInput;
