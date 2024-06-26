import Image from "next/image";
import Link from 'next/link';
import './CustomerSidebar.scss';
import { useRouter } from "next/router";
import { logout } from "@/operations/user.fetch";


export default function CustomerSidebar({ user, option = 0 }) {

    const router = useRouter();

    return (
        <div className="CustomerSidebar" >
            <div className="CustomerSidebar__top">

                {option === 0 ?
                    <div className="CustomerSidebar__top__row">
                        <Image className="CustomerSidebar__top__row--image" src={'/Images/Customer/my_projects.webp'} width={25} height={25} />
                        <Link href="/customer/customerDashboard">
                            <p className="CustomerSidebar__top__row--text">My Projects</p>
                        </Link>
                    </div>
                    : null}
                <div className="CustomerSidebar__top__row">
                    {/* <Image className="CustomerSidebar__top__row--image" src={'/Images/Customer/bid_management.webp'} width={20} height={20} />
                    <Link href="/">
                        <p className="CustomerSidebar__top__row--text">Bid Management</p>
                    </Link> */}
                </div>
            </div>
            <div className="CustomerSidebar__bottom">
                <div className="CustomerSidebar__bottom--column">
                    <p className="CustomerSidebar__bottom--column__name">{user.name}</p>
                    <p className="CustomerSidebar__bottom--column__email">{user.email}</p>
                </div>
                <div onClick={async () => {
                    await logout();
                    window.location.reload();
                }}>
                    <Image className="CustomerSidebar__top__row--image" src={'/Images/Customer/logout.webp'} width={20} height={20} />
                </div>
            </div>
        </div>
    )
}