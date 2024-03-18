import {Popover, Button } from 'antd'
import CustomeAvatar from '../custome-avatar'
import { useGetIdentity } from '@refinedev/core'

import type { User } from '@/graphql/schema.types'
import { Text  } from '../text'
const CurrentUser =() => {
    const { data: user } = useGetIdentity<User>()

    const content = (
        <div style={{ 
            display:'flex',
            flexDirection:'column',
        }}>
           <Text strong style={{ padding:'12px 20px'}}> {user?.name}
            </Text> 
        </div>
    )
    return (
        <>
        <Popover
        placement='bottomRight'
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
        >
           <CustomeAvatar 
              name={user?.name}
              src={user?.avatarUrl}
              size="default"
              style={{ cursor: 'pointer' }}
           />
        </Popover>
        </>
    )
}
export default CurrentUser