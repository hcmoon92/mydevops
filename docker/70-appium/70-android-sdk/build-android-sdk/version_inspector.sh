cat /etc/*release | grep VERSION= && java -version && gradle -v && kotlinc -version && cat $ANDROID_SDK_ROOT/cmdline-tools/tools/source.properties && sdkmanager --list && apt list --installed | grep openssh-server
