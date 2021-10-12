import React,{useState, useEffect} from 'react'
import { Radio, Space, notification} from "antd";
import { postTestVoteApi, updateTestVoteApi} from "../../../api/testVote";
import {getVotes} from '../../../api/vote';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import jwtDecode from "jwt-decode";

export const Votes = ({
        ask, 
        alt1,
        alt2,
        alt3,
        alt4,
        user,
		setUser,
		voto1,
		token,
		setToken,
		num
    }) => {

	const [vote, setVote] = useState(false);
	const [statusVote, setStatusVote] = useState(true);
	const [idVotes, setIdVotes] = useState('');

	useEffect(() => {
		getVotes(token, user.id)
		.then(res =>{
			if(res.ok && res.votes.length !==0){
				if(res.votes[0][num]!==0 ){
					setStatusVote(false);
					setIdVotes(res.votes[0]._id);
				}
			}
		})
	}, [])


	const sendVotes = async() =>{

		if(!vote) {
			notification["error"]({
				message: "Debes seleccionar una opción"
			});
		}else{

			let resp = await getVotes(token, user.id);
			if(resp.votes.length === 0){
				const data = {
					userID: user.id,
					question1: 0
				}
				await postTestVoteApi(token, data);
			}

			resp = await getVotes(token, user.id);
			//Votos de la base de datos 
			let votes = resp.votes[0];
			const votesId = resp.votes[0]._id;
			//Actualizar pregunta
			votes = {
				...votes, 
				[num]: vote
			}
	
			const data = {
				userID : user.id,
				voteId: votesId,
				votes: votes
			}
			const response = await updateTestVoteApi(token, data);
			if(response.ok){
				notification["success"]({
					message: response.message
				});
				setStatusVote(false);
			}
		}
	}

    const sendVote1 = async () => {
		if (!vote) {
			notification["error"]({
				message: "Debes seleccionar una opción",
			});
		} else{
			const data = {
				userID: user.id,
				question1: vote
			}
			const response = await postTestVoteApi(token, data);
			if(response.ok){
				const { accessToken, refreshToken, message } = response;
				localStorage.setItem(ACCESS_TOKEN, accessToken);
				localStorage.setItem(REFRESH_TOKEN, refreshToken);
				setToken(accessToken);
				setUser(jwtDecode(accessToken));
				notification["success"]({
					message: message,
				});
				setStatusVote(false);
			}else {
				notification["error"]({
					message: response.message,
					});
				}
		}
	};

    return (
        <>
		{
			statusVote 
			?<>
			<h3>{ask}</h3>
				<Radio.Group onChange={(e) => setVote(e.target.value)} value={vote} className="radioButton">
					<Space direction="vertical">
						<Radio value={1}>{alt1}</Radio>
						<Radio value={2}>{alt2}</Radio>
						<Radio value={3}>{alt3}</Radio>
						<Radio value={4}>{alt4}</Radio>
					</Space>
				</Radio.Group>   
				{
					voto1
					?<button className="btn" onClick={sendVote1}>Votar</button>          
					:<button className="btn" onClick={sendVotes}>Votar</button>
				}
			</>
			:<h1>Voto realizado</h1>	
		}
        </>
    )
}
