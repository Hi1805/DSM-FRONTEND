import React from 'react'
import "../listingStyle.scss";
import { Loading } from '../../components/Loading/index';
import { GlobalContext } from '../../services';
import { ItemListing } from '../../components/ItemListing/index';
interface ListingTeacherProps {
    valueSeacrch: string;
    mode: boolean;
}
export const ListTeachers = (props: ListingTeacherProps) => {
    const { valueSeacrch, mode } = props;
    const { teachers } = React.useContext(GlobalContext);

    const listingRender = () => {
        const filterList = teachers.filter((teacher) => Object.values(teacher).map(item => item.toLocaleLowerCase()).join("").includes(valueSeacrch.toLocaleLowerCase()));
        if (mode) {
            return filterList.sort((prev, next) => {
                if (!next.first_name.localeCompare(prev.first_name, "vn")) {
                    return next.last_name.localeCompare(prev.last_name, "vn");
                }
                return next.first_name.localeCompare(prev.first_name, "vn");
            })
        }
        else {
            const sorted = filterList.sort((prev, next) => {
                if (!prev.first_name.localeCompare(next.first_name, "vn")) {
                    return prev.last_name.localeCompare(next.last_name, "vn");
                }
                return prev.first_name.localeCompare(next.first_name, "vn");
            })
            return [...sorted];
        }
    }
    return (
        <div className="td-listing__container table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Class Leader</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {listingRender().map((teacher, index) => <ItemListing info={teacher}
                        index={index}
                        key={teacher.id} />
                    )}
                </tbody>
            </table>

        </div>
    )
}
