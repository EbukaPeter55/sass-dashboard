import {render} from '@testing-library/react';
import MobileDrawer from '../MobileDrawer';
import {AuthProvider} from "@/app/contexts/AuthContext";

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        refresh: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
        prefetch: jest.fn(),
    }),
    usePathname: () => '/mock-path',
}));

describe('MobileDrawer', () => {
    it('renders without crashing when open', () => {
        render(
            <AuthProvider>
                <MobileDrawer open={true} onClose={jest.fn()}/>
            </AuthProvider>
        );
    });
});
