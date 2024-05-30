import styles from '../UserInfo/UserInfo.module.scss';
import BlogIcon from '../../assets/icon-website.svg?react';
import TwitterIcon from '../../assets/icon-twitter.svg?react';
import LocationIcon from '../../assets/icon-location.svg?react';
import CompanyIcon from '../../assets/icon-company.svg?react';
import {LocalGithubUser} from "../../types";
import {InfoItem, InfoItemProps} from "../InfoItem";

interface UserInfoProps extends Pick<
    LocalGithubUser,
    'blog' | 'twitter' | 'location' | 'company'
>{ }

export const UserInfo = ({ blog, twitter, location, company}: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <LocationIcon />,
            text: location
        },
        {
            icon: <BlogIcon />,
            text: blog,
            isLink: true
        },
        {
            icon: <TwitterIcon />,
            text: twitter
        },
        {
            icon: <CompanyIcon />,
            text: company
        },
    ]

    return (
        <div className={styles.userInfo}>
            {items.map((item, index)=>{
                return <InfoItem {...item} key={index} />
            })}
        </div>
    );
}
