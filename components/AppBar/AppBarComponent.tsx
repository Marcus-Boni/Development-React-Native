import React from 'react';
import { Appbar } from 'react-native-paper';

interface AppBarComponentProps {
  title: string;
  subtitle?: string;
  onBackAction?: () => void;
  onMoreAction?: () => void;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({
  title,
  subtitle,
  onBackAction,
  onMoreAction
}) => {
  return (
    <Appbar.Header>
      {onBackAction && <Appbar.BackAction onPress={onBackAction} />}
      <Appbar.Content title={title} subtitle={subtitle} />
      {onMoreAction && (
        <Appbar.Action icon="dots-vertical" onPress={onMoreAction} />
      )}
    </Appbar.Header>
  );
};

export default AppBarComponent;
