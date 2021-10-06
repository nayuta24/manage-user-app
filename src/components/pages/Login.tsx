import { ChangeEvent, memo, useState, VFC } from "react";
import { Flex, Box, Heading, Divider,Input, Button, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/Button/PrimaryButton"
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
    const [userId, setUserId] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

    const { login, loading } = useAuth();

    const onClickLogin = () => login(userId);

    return (
        <Flex alignItems="center" justifyContent="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">
                    ユーザー管理アプリ
                </Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input
                        placeholder="ユーザーID"
                        value={userId}
                        onChange={onChangeUserId}
                    />
                   <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId==="" || loading }>ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})
