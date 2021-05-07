import React from 'react'
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyIcon from '@material-ui/icons/Reply'
import { TweetType } from '../../../../store/bundles/tweets'
import { Link } from 'react-router-dom'

interface PropsType extends TweetType {
    classes: any
}

const TweetContentItem: React.FC<PropsType> = ({
    classes,
    _id,
    text,
    user: { fullname, username, avatarUrl },
}) => {
    return (
        <Link to={`/home/tweet/${_id}`}>
            <Paper className={classes.contentHeader} variant={'outlined'}>
                <Grid container spacing={4}>
                    <Grid item xs={1}>
                        <Avatar alt="Avatar" src={avatarUrl} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography
                            style={{
                                marginBottom: 10,
                            }}
                        >
                            <b>{fullname}</b>
                            <span
                                style={{
                                    color: 'grey',
                                }}
                            >
                                &ensp;&ensp;@{username}&ensp;&middot; 1 ч
                            </span>
                        </Typography>
                        <Typography variant="body1">{text}</Typography>
                        <div className={classes.contentMenuButtonGroup}>
                            <IconButton className={classes.contentMenuIconButton}>
                                <ChatBubbleOutlineIcon
                                    className={classes.contentMenuIcon}
                                    color="primary"
                                    style={{
                                        marginRight: 10,
                                    }}
                                />
                                <span>1</span>
                            </IconButton>
                            <IconButton className={classes.contentMenuIconButton}>
                                <RepeatIcon className={classes.contentMenuIcon} color="primary" />
                            </IconButton>
                            <IconButton className={classes.contentMenuIconButton}>
                                <FavoriteBorderIcon
                                    className={classes.contentMenuIcon}
                                    color="primary"
                                />
                            </IconButton>
                            <IconButton className={classes.contentMenuIconButton}>
                                <ReplyIcon className={classes.contentMenuIcon} color="primary" />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
    )
}

export default TweetContentItem