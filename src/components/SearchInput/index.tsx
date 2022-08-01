import React, { useState } from "react";
import { getUserData } from "../../services/sessions";
import { getLinting } from "../../services/sessions";

import CardDetailsUser from "../../components/CardDetailsUser";
import CardDetailsRepos from "../../components/CardDetailsRepos";
import CardDetailsBranches from "../../components/CardDetailsBranches";
import CardDetailsCommits from "../../components/CardDetailsCommits";
import Loading from "../../components/Loading";

import { TbUserSearch } from "react-icons/tb";
import {
  Container,
  WrapperSearch,
  CardDescription,
  Input,
  Button,
  WrapperCards,
  CardInitial,
  UserNotFound,
} from "./styles";
import { FiGithub } from "react-icons/fi";

const SearchInput = () => {
  const [valueInput, setValueInput] = useState("");
  const [user, setUser] = useState({});
  const [repoName, setRepoName] = useState("");
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const [listingShow, setLintingShow] = useState("");
  const [showError, setShowError] = useState(false);

  const handlerInputSearch = (e: any) => {
    setLoading(true);
    setShowError(false);
    e.preventDefault();
    getUserData(valueInput)
      .then((response) => {
        if (response === undefined) {
          setShowError(true);
          setLintingShow("");
          setLoading(false);
        } else {
          setUser({ response });
          setShowError(false);
          setLoading(false);
          setLintingShow("repo");
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
        setShowError(true);
      });
  };
  const handleListing = (e: any, listParam: string) => {
    setLoading(true);
    setRepoName(e);
    setLintingShow(listParam);

    getLinting(valueInput, e, listParam)
      .then((response) => {
        setListing(response.data);
        setLoading(false);
        setShowError(false);
      })
      .catch((err) => {
        console.log("error branch", err);
        setLoading(false);
        setShowError(true);
      });
  };
  return (
    <>
      <Container>
        <WrapperSearch onSubmit={(e) => handlerInputSearch(e)}>
          <TbUserSearch style={{ fontSize: "30px", color: "#ce3df3" }} />
          <Input
            minLength={3}
            placeholder="insira username do usuário"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <Button type="submit">Pesquisar</Button>
        </WrapperSearch>
      </Container>
      {loading ? (
        <Loading />
      ) : showError ? (
        <UserNotFound>
          <div className="ops">ops...</div>
          <div>usuário não encontrado, verifique o nome e tente novamente.</div>
        </UserNotFound>
      ) : (
        <>
          {listingShow ? (
            <WrapperCards>
              <CardDetailsUser dataUser={user} />
              <CardDescription>
                {listingShow === "repo" && (
                  <CardDetailsRepos
                    dataUser={user}
                    dataBrach={(e: any) => {
                      handleListing(e, "branches");
                    }}
                  />
                )}

                {listingShow === "branches" && (
                  <CardDetailsBranches
                    dataUser={listing}
                    dataBrach={() => {
                      handleListing(repoName, "commits");
                    }}
                  />
                )}

                {listingShow === "commits" && (
                  <>
                    <div>
                      <CardDetailsCommits dataUser={listing} />
                    </div>
                  </>
                )}
              </CardDescription>
            </WrapperCards>
          ) : (
            <CardInitial>
              {" "}
              <FiGithub />{" "}
            </CardInitial>
          )}
        </>
      )}
    </>
  );
};

export default SearchInput;
